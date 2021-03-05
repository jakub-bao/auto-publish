import {getRepoPaths} from "./modules/getRepoPaths";
import {autoPublish} from "./modules/autoPublish";

getRepoPaths().forEach(autoPublish)