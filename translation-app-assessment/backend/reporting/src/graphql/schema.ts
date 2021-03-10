const { gql } = require('apollo-server-express');

const schema = gql`
  type Rate {
    day: String
    hour: String
    language: String
    facilityGrade : Int
    efficientGrade: Int
    offerLinked: String
    comment: String
  }
  type Kpi {
    day: String
    roomId: String
    conversation: Conversation
    device: Device
    error: ErrorFormat
  }
  type Conversation{
    begin: String
    duration: String
    end: String
    languages: String
    translationMode: String
    nbUsers : Int
    roomID: String
  }
  type Device{
    support: String
    guest: UserDevice
    advisor : UserDevice
  }
  type UserDevice {
    equipment : String
    browser: Browser
    os : Os
  }
  type Os {
    name: String
    version: String
  }
  type Browser {
    name: String
    version: String
  }
  type Error {
    roomId: String
    day: String
    hour: String
    detail:ErrorDetail
  }
  type ErrorDetail{
    code: String
    description: String
  }
  type ErrorFormat{
    day: String
    hours: String
    descriptions: String
  }
  type Query {
    rates: [Rate]
    rate(language: String): [Rate]
    kpi:[Kpi]
    error(roomId: String): [Error]
  },
  type Mutation {
    login(key: String): String
  }
`;

export default schema;