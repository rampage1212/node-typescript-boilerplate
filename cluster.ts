
import * as cluster from 'cluster';

export class ClusterConfig {

    workers = [];

    /**
     * Set Up Worker as The number of core available
     *
     * @memberof ClusterConfig
     */
    setupWorker = (): void => {
        let numCores = require('os').cpus().length;
        console.log('Master cluster setting up ' + numCores + ' workers');

        for (let i = 0; i < numCores; i++) {
            // creating workers and pushing reference in an array
            // these references can be used to receive messages from workers
            this.workers.push(cluster.fork());

            // to receive messages from worker process
            this.workers[i].on('message', function (message) {
                console.log(message);
            });
        }

        cluster.on('online', function (worker) {
            console.log('Worker ' + worker.process.pid + ' is listening');
        });

        cluster.on('exit', function (worker, code, signal) {
            console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
            console.log('Starting a new worker');
            cluster.fork();
            this.workers.push(cluster.fork());
            // to receive messages from worker process
            this.workers[this.workers.length - 1].on('message', function (message) {
                console.log(message);
            });
        });
    }
    /**
     * Initilise the Worked if Master is called
     * Return True for Worker 
     * 
     * @param isClusterEnable is Cluster is apply or not, True if you want create cluster
     * @param callback Return true in case worker if Clustering is enable
     * @param callback Return true in case clutering is not enable
     *
     * @memberof ClusterConfig
     */
    initaliseCLuster = (isClusterEnable: boolean, callback: (isReady: boolean) => void) => {
        if (isClusterEnable && cluster.isMaster) {
            this.setupWorker();
        } else {
            callback(true);
        }
    }
}