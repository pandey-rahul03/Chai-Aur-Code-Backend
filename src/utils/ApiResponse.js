class ApiRespone {
     constructor(statusCode, message, data = "success"){
          this.statusCode = statusCode
          this.data = data
          this.message = message
          this.success = statusCode < 400
     }

}