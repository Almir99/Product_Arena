import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  static const String routeName = "/home";
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String dummyUser = "Dr. Jon Doe";

  Widget Patiant() {
    return Row(
      children: [
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 20, vertical: 5),
          child: CircleAvatar(
            backgroundColor: Colors.grey,
            radius: 30,
          ),
        ),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: const [
            Text(
              "Pacient name",
              style: TextStyle(
                  fontSize: 16,
                  fontFamily: "Outfit",
                  fontWeight: FontWeight.bold),
            ),
            Text(
              "Diagnosis",
              style: TextStyle(
                  fontSize: 14,
                  fontFamily: "Outfit",
                  fontWeight: FontWeight.w600),
            )
          ],
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
                  child: Image.asset(
                    "images/Product_arena.png",
                    height: 55,
                  ),
                ),
                Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 5, horizontal: 20),
                  child: Builder(builder: (context) {
                    return TextButton(
                      onPressed: () {
                        Navigator.pushNamed(context, "/");
                      },
                      child: const Icon(
                        Icons.logout,
                        color: Colors.black,
                      ),
                    );
                  }),
                )
              ],
            ),
            Row(
              children: [
                const Padding(
                  padding: EdgeInsets.symmetric(horizontal: 20, vertical: 25),
                  child: CircleAvatar(
                    backgroundColor: Colors.grey,
                    backgroundImage: AssetImage("images/Doctor.png"),
                    radius: 60,
                  ),
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      "My Profile",
                      style: TextStyle(
                        fontFamily: "Outfit",
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(
                      height: 5,
                    ),
                    Text(
                      dummyUser,
                      style: const TextStyle(
                          fontSize: 30,
                          fontFamily: "Outfit",
                          fontWeight: FontWeight.bold),
                    )
                  ],
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 15),
              child: const Text(
                "Patiant list",
                style: TextStyle(
                  fontSize: 18,
                  fontFamily: "Outfit",
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Patiant(),
            Patiant(),
            Patiant(),
          ],
        ),
      ),
    );
  }
}
