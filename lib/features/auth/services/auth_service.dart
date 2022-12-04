/*import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;

var url = "77.77.216.122:3000";

class AuthService {
  void loginDoctor({
    required String email,
    required String password,
  }) async {
    try {
      http.Response res = await http.post(
        Uri.parse('$url/login'),
        body: ({
          'email': email,
          'password': password,
        }),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        },
      );
    } catch (e) {
      const Text("Server Error");
    }
  }
}
*/