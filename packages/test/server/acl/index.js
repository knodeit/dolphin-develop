/**
 * Created by Vadim on 12/17/15.
 */
'use strict';

module.exports = function () {
    return {
        label: 'Test',
        package: 'test',
        get entities() {
            return {
                index: this.package + '_index'
            };
        },
        get routers() {
            return [
                {
                    roles: ['authenticated'],
                    allows: [
                        {entity: this.entities.index, permissions: ['get'], disabled: ['get', 'post', 'put', 'delete']}
                    ]
                }
            ];
        },
        get labels() {
            return [
                {
                    name: 'Global',
                    labels: [
                        {
                            key: this.entities.index,
                            value: 'Index page'
                        }
                    ]
                }
            ];
        }
    };
};