const { S3Client } = require('@aws-sdk/client-s3');

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_SECRET_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
  }
});

module.exports = {
  s3
};