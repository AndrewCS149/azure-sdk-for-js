/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  SyncStorageKeysInput,
  AzureMediaServices
} from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Synchronizes storage account keys for a storage account associated with the Media Service account.
 *
 * @summary Synchronizes storage account keys for a storage account associated with the Media Service account.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2021-11-01/examples/accounts-sync-storage-keys.json
 */
async function synchronizesStorageAccountKeys() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "contoso";
  const accountName = "contososports";
  const parameters: SyncStorageKeysInput = { id: "contososportsstore" };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.mediaservices.syncStorageKeys(
    resourceGroupName,
    accountName,
    parameters
  );
  console.log(result);
}

synchronizesStorageAccountKeys().catch(console.error);
