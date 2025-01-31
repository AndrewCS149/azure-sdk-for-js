let nock = require('nock');

module.exports.hash = "e4b0dbf41afd7d2a4dfe67be1421db6c";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .post('/backup')
  .query(true)
  .reply(401, "", [ 'content-type',
  'application/json; charset=utf-8',
  'x-ms-server-latency',
  '1',
  'x-content-type-options',
  'nosniff',
  'www-authenticate',
  'Bearer authorization="https://login.windows-ppe.net/azure_tenant_id", resource="https://managedhsm-int.azure-int.net"',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '0',
  'x-ms-request-id',
  '9cd5d3a8-f2aa-11ea-ae7c-0242ac120003',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'content-security-policy',
  'default-src \'self\'',
  'cache-control',
  'no-cache' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .post('/backup', {"storageResourceUri":"https://uri.blob.core.windows.net/backup","token":"blob_storage_sas_token"})
  .query(true)
  .reply(202, {"status":"InProgress","statusDetails":null,"error":{"code":null,"message":null,"innererror":null},"startTime":1599770332,"endTime":null,"jobId":"5f4fac0accea45b794bd5b5f4dc911ef","azureStorageBlobContainerUri":null}, [ 'server',
  'Kestrel',
  'date',
  'Thu, 10 Sep 2020 20:38:51 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'azure-asyncoperation',
  'https://eastus2.keyvault_name.managedhsm.azure.net/backup/5f4fac0accea45b794bd5b5f4dc911ef/pending',
  'x-ms-keyvault-region',
  'EASTUS',
  'Retry-After',
  '0',
  'x-ms-request-id',
  '9cd5d3a8-f2aa-11ea-ae7c-0242ac120003',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '899',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/backup/5f4fac0accea45b794bd5b5f4dc911ef/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"5f4fac0accea45b794bd5b5f4dc911ef","startTime":1599770332,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Thu, 10 Sep 2020 20:38:52 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '9cd5d3a8-f2aa-11ea-ae7c-0242ac120003',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '702',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/backup/5f4fac0accea45b794bd5b5f4dc911ef/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"5f4fac0accea45b794bd5b5f4dc911ef","startTime":1599770332,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Thu, 10 Sep 2020 20:38:53 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '9cd5d3a8-f2aa-11ea-ae7c-0242ac120003',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '1028',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/backup/5f4fac0accea45b794bd5b5f4dc911ef/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"5f4fac0accea45b794bd5b5f4dc911ef","startTime":1599770332,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Thu, 10 Sep 2020 20:38:57 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '9cd5d3a8-f2aa-11ea-ae7c-0242ac120003',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '699',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/backup/5f4fac0accea45b794bd5b5f4dc911ef/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"5f4fac0accea45b794bd5b5f4dc911ef","startTime":1599770332,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Thu, 10 Sep 2020 20:38:59 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '9cd5d3a8-f2aa-11ea-ae7c-0242ac120003',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '655',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/backup/5f4fac0accea45b794bd5b5f4dc911ef/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"5f4fac0accea45b794bd5b5f4dc911ef","startTime":1599770332,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Thu, 10 Sep 2020 20:39:01 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '9cd5d3a8-f2aa-11ea-ae7c-0242ac120003',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '621',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/backup/5f4fac0accea45b794bd5b5f4dc911ef/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":"https://uri.blob.core.windows.net/backup/mhsm-keyvault_name-2020091020385266","endTime":1599770343,"error":null,"jobId":"5f4fac0accea45b794bd5b5f4dc911ef","startTime":1599770332,"status":"Succeeded","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Thu, 10 Sep 2020 20:39:05 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '9cd5d3a8-f2aa-11ea-ae7c-0242ac120003',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '257',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '626',
  'content-security-policy',
  'default-src \'self\'' ]);
