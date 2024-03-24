import DataService from "../services/data.service.js";
import path from "path";
import { fileURLToPath } from "url";
import Post from "../entities/post.entity.js";

const currentFileURL = import.meta.url;
const currentFilePath = fileURLToPath(currentFileURL);
const filePathDirectory = path.dirname(currentFilePath);
const postsPath = path.join(filePathDirectory, "..", "data", "posts.json");

export default class PostModel {
    static async getAll() {
        
      return await DataService.readData(postsPath);
    }
    

    static async getById(id) {
      const posts = await DataService.readData(postsPath);
      const foundPost = posts.find((post) => post.id === id);
      if (!foundPost) {
        throw new Error("Post not found");
    }
    return foundPost;

}

    static async create(requestBody) {
        const posts  = await this.getAll();
        const {title, body, tags} = requestBody;
        const post = new Post(title, body, tags);
        posts.push(post);
        await DataService.writeData(postsPath, posts);
        return post;
        
    }

    static async update(id, body) {
        const posts = await this.getAll();
        const index = posts.findIndex((post) => post.id === id);
        if (index === -1) {
            throw new Error("Post not found");
        }
        const updatedPost = { ...posts[index], ...body, id, updatedAt: new Date().toISOString() };
        posts[index] = updatedPost;
        await DataService.writeData(postsPath, posts);
        return updatedPost;

    }

    static async delete(id) {
        const posts = await this.getAll();
        const filteredPosts = posts.filter((post) => post.id !== id); 
        if (filteredPosts.length === posts.length) {
            throw new Error("Post not found");
        }
        await DataService.writeData(postsPath, filteredPosts);
    }
    
}
