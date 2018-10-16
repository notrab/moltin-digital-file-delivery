const AWS = require('aws-sdk')

const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: 'eu-central-1'
})

module.exports.sendFile = async event => {
  try {
    console.log(event)

    const url = await s3.getSignedUrl('getObject', {
      Bucket: 'moltin-test',
      Key: 'secret.zip',
      Expires: 60 // 3600,
    })

    console.log(url)

    return {
      statusCode: 200,
      body: JSON.stringify({ url })
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: err.message || 'Internal Server Error'
    }
  }
}
