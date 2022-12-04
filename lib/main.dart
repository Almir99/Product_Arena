import 'package:flutter/material.dart';
import 'package:tech387/features/auth/screens/home_screen.dart';
import 'package:tech387/router.dart';

void main() {
  runApp(const Doctors_app());
}

class Doctors_app extends StatefulWidget {
  const Doctors_app({super.key});

  @override
  State<Doctors_app> createState() => _Doctors_appState();
}

class _Doctors_appState extends State<Doctors_app> {
  final loginKey = GlobalKey<FormState>();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  List<String> dummy_user = ["career@tech387.com", "Pass123"];

  bool isPasswordVisable = true;
  bool isValid = true;

  Widget emailField() => Padding(
        padding: const EdgeInsets.all(12.0),
        child: TextFormField(
          controller: emailController,
          textInputAction: TextInputAction.next,
          decoration: const InputDecoration(
            labelText: "E-mail",
            focusedBorder: UnderlineInputBorder(
              borderSide: BorderSide(
                width: 2,
                color: Color.fromRGBO(4, 231, 98, 1),
              ),
            ),
          ),
          validator: (value) {
            if (value != dummy_user[0]) {
              return " ";
            } else {
              return null;
            }
          },
        ),
      );

  Widget passwprdField() => Padding(
      padding: const EdgeInsets.all(12.0),
      child: TextFormField(
          controller: passwordController,
          obscureText: isPasswordVisable,
          textInputAction: TextInputAction.done,
          decoration: InputDecoration(
            labelText: "Password",
            suffixIcon: IconButton(
                onPressed: () {
                  setState(
                    () {
                      isPasswordVisable = !isPasswordVisable;
                    },
                  );
                },
                icon: isPasswordVisable
                    ? const Icon(
                        Icons.visibility_off,
                      )
                    : const Icon(Icons.visibility)),
            focusedBorder: const UnderlineInputBorder(
              borderSide: BorderSide(
                width: 2,
                color: Color.fromRGBO(4, 231, 98, 1),
              ),
            ),
          ),
          validator: (value) {
            if (value != dummy_user[1]) {
              return " ";
            } else {
              return null;
            }
          }));

  Widget login() => Padding(
        padding: const EdgeInsets.all(8.0),
        child: Builder(builder: (context) {
          return TextButton(
            style: TextButton.styleFrom(
              backgroundColor: const Color.fromRGBO(4, 231, 98, 1),
            ),
            onPressed: () {
              setState(() {
                isValid = false;
                if (loginKey.currentState!.validate()) {
                  isValid = true;
                  Navigator.pushNamed(context, HomeScreen.routeName);
                }
              });
            },
            child: const Padding(
              padding: EdgeInsets.all(10.0),
              child: Text(
                "Log In",
                style: TextStyle(
                    color: Colors.black, fontFamily: "Outfit", fontSize: 14),
              ),
            ),
          );
        }),
      );

  Widget valid() {
    if (!isValid) {
      return const Center(
        child: Padding(
          padding: EdgeInsets.fromLTRB(0, 0, 0, 30),
          child: Text(
            "Pogresan e-mail ili password",
            style: TextStyle(
                color: Colors.red,
                fontSize: 16,
                fontFamily: "Outfit",
                fontWeight: FontWeight.bold),
          ),
        ),
      );
    } else
      return Text("");
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        onGenerateRoute: (settings) => generateRoute(settings),
        home: Scaffold(
          body: SafeArea(
            child: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Image.asset("images/Product_arena.png"),
                  const SizedBox(height: 27),
                  Form(
                    key: loginKey,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        emailField(),
                        const SizedBox(height: 14),
                        passwprdField(),
                        const SizedBox(height: 14),
                        valid(),
                        login(),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ));
  }
}
