/*
 * Copyright 2020 Google LLC. This software is provided as-is, without warranty
 * or representation for any use or purpose. Your use of it is subject to your
 * agreement with Google.
 */

terraform {
  backend "gcs" {
    bucket = "pe-trad-tf-state"
    prefix = "pe-trad/02-backend"
  }
}
