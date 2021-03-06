import mongoose from "mongoose";

const connection = {};

async function dbConnect () {
	if (connection.isConnected) {
		return;
	}
	await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	});

	connection.isConnected = mongoose.connection.readyState;
}

export default dbConnect;