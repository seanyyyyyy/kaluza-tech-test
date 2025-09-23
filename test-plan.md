### Test Plan

Estimate age and input fallback
- first name only
- first name with diacritics
- full name
- name + country

Estimate age error handling
- invalid name characters
- no name
- name length too long
- invalid country

Batch processing
- multiple names (10)
- multiple names (10) + country
- single name in batch
- empty batch
- too many names

Authentication
- valid api key
- invalid api key

Rate limiting
- Request limit reached
- Rate-Limit headers returned