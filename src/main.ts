import { Actor } from 'apify';
import { CheerioCrawler, log, LogLevel } from 'crawlee';
import { router } from './routes.js';
import { getStartUrls } from './tools.js';
import { InputSchema } from './types.js';
import { CONCURRENCY, MAX_RETRIES } from './constants.js';
import actorStatistics from './actor_statistics.js';

await Actor.init();

const { inputCountry } = (await Actor.getInput<InputSchema>()) ?? {
    "inputCountry": "UNITED KINGDOM",
};

const startUrls = getStartUrls(inputCountry);

//debugging tool
const debug = false
if (debug) {
    log.setLevel(LogLevel.DEBUG);
}
//

const proxyConfiguration = await Actor.createProxyConfiguration();

const crawler = new CheerioCrawler({
    proxyConfiguration,
    maxConcurrency: CONCURRENCY,
    maxRequestRetries: MAX_RETRIES,
    requestHandler: router,
    errorHandler: (context, error) => {
        actorStatistics.saveError(context.request.url, error.toString(), context.request.payload);
    },
    failedRequestHandler: (context, error) => {
        actorStatistics.saveError(context.request.url, error.toString(), context.request.payload);
    },
});

await crawler.run(startUrls);

actorStatistics.logStatistics();
await Actor.exit();
