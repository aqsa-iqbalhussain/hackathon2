export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-22'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sk13lhVIcEswRQN7cYZN5ZABillKK4SiIP2b65OLmfw9RncTjtKnr5Kucz76U4KUsDuGvMNOGlFbGzzXZqmEeIh4GHJFR9FUzFQgAubuHTBTVyThP3E2Ahp4iod2mBUkRROA8FB5NfM2y1Pf46cojhWiMB5XygynUZ6PxypbXcSWgkp5RG5Z"
,
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
