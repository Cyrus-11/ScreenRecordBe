import {app, PORT} from "./config/appConfig.js";
import connectDB from "./config/dbConfig.js";

const main = async()=>{
	try {
		//connectDB();
	    app.listen(PORT, () => {
			console.log(`Server is up and running at port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}

main();