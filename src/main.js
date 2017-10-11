import {Aurelia, PLATFORM} from 'aurelia-framework';

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin(PLATFORM.moduleName('aurelia-dialog'), config => {
            config.useDefaults();
        });

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}