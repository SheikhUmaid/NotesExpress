class ApiResponse{
    status = 0
    data = {}
    message = ""
    constructor(statusCode,data,message){
        this.status = statusCode
        this.data = data
        this.message = message
    }
}

export default ApiResponse