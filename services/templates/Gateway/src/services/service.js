import { create } from "apisauce";

export const Service = create({
  baseURL: 'http://localhost:5000',
  headers: {
    "Content-Type": "application/json"
  }
});


export default Service;
