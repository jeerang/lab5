import {S3Client} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
      credentials: {
        accessKeyId: "df6b571905deff7580874941556f018e",
            secretAccessKey:
          "5ab8ad6a1226aae37a22e7c283abe60ee67669d3e1da19165d499e6ef02be440"
      },
  endpoint: "https://gpcclggqlsbkqpiaxmnf.storage.supabase.co/storage/v1/s3",
      region: "ap-southeast-1",
      forcePathStyle: true


    });
export default s3Client;
