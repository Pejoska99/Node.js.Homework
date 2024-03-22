import { v4 as uuidv4} from "uuid";

class Post {
    constructor (title, body, tags) {
      this.id = uuidv4();
      this.title = title;
      this.body = body;
      this.tags = tags;
    }
}

export default Post

//id kje se generira so uuid avtomatski - kje se generira pri kreiranje na instanca od klasite