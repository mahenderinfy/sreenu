import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class ConfigService {

    private _config: Object
    private _env: Object
    private _configCustom: Object

    constructor(private http: Http) {
    }

    /**
     * This method:
     *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
    public load() {
        return new Promise((resolve, reject) => {
            this.http.get('../configMetadata/env.json')
                .map(res => res.json())
                .subscribe((env_data) => {
                    this._env = env_data;
                    this.http.get('../configMetadata/' + env_data.env + '.json')
                        .map(res => res.json())
                        .catch((error: any) => {
                            console.error(error);
                            return Observable.throw(error.json().error || 'Server error');
                        })
                        .subscribe((data) => {
                            this._config = data;
                            resolve(true);
                        });
                });
        });

    }

    getEnv(key: any) {
        return (<any>this._env)[key];
    }

    get(key: any) {
        console.log(this._config);
        return (<any>this._config)[key];
    }
};