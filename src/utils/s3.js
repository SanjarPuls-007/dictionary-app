const { S3Client, DeleteObjectCommand } = require('@aws-sdk/client-s3')
const {
	AWS_ACCESS_KEY_ID,
	AWS_SECRET_ACCESS_KEY,
	AWS_REGION,
	AWS_BUCKET_NAME,
	AWS_URL,
} = require('./secret.js')
const { Upload } = require('@aws-sdk/lib-storage')

const s3Client = new S3Client({
	endpoint: AWS_URL,
	region: AWS_REGION,
	credentials: {
		accessKeyId: AWS_ACCESS_KEY_ID,
		secretAccessKey: AWS_SECRET_ACCESS_KEY,
	},
})

const uploadFileS3 = async (key, buffer) => {
	const upload = new Upload({
		client: s3Client,
		params: {
			Bucket: AWS_BUCKET_NAME,
			Key: key,
			Body: buffer,
		},
	})

	try {
		console.log('Fayl yuklanmoqda...')
		const data = await upload.done()
		if (data.$metadata.httpStatusCode === 200) {
			console.log('Yuklandi!')
			return data.Location
		}
	} catch (error) {
		console.error('Fayl yuklashda xatolik:', error)
	}
}

const deleteFileS3 = async location => {
	try {
		if (location) {
			const key = location.split('s3.twcstorage.ru/')[1]
			await s3Client.send(
				new DeleteObjectCommand({
					Bucket: AWS_BUCKET_NAME,
					Key: key,
				})
			)
		}
	} catch (error) {
		console.error("Fayl o'chirishda xatolik:", error)
	}
}

module.exports = { uploadFileS3, deleteFileS3 }
