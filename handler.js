'use strict';
const SQS = require('aws-sdk/clients/sqs');
const sqs = new SQS({region: "us-west-2"});
module.exports.enqueue = async (event,context,callback) => {
  try{

      console.log(event.queryStringParameters);
      if(event.queryStringParameters)
      {
        const params = {
          MessageBody: JSON.stringify(event.queryStringParameters),
          QueueUrl: "https://sqs.us-west-2.amazonaws.com/156326229501/WeatherQueue"
        }
        let data = await sqs.sendMessage(params).promise();
        callback(null,{
          statusCode: 200,
          body: JSON.stringify("Added "+params.MessageBody+" to queue")
        });
      }
  }
  catch(err)
  {
    console.log("Errror is executing the enquee Lambda");
    callback(null, {
      statusCode:500,
      body: JSON.stringify("failed to enqueue")
    });
  }
};

  module.exports.dequeue = async (event,context,callback) => {
    try{
         let location =  JSON.parse(event.Records[0].body);
         console.log(location.city);
         console.log(location);
         if(location.city && location.city.length)
         {
            console.log(`its is always Rainy in ${location.city}`);
            callback(null, {
              statusCode:200,
              body: JSON.stringify("dequeued")
            });
         }
    }
    catch(err)
    {
      console.log(err);
      callback(null, {
        statusCode:500,
        body: JSON.stringify("failed to dequeue")
      });
    }
};
