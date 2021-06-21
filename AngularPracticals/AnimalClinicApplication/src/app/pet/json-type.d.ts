// Angular cannot import json files by default. Therefor we use this.

declare module "*.json" {
    const value:any;
    export default value;
}