/*import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:json_annotation/json_annotation.dart';

part 'doctor.g.dart';

@JsonSerializable()
class Doctor {
  String? id;
  String? name;
  String password;
  String email;
  String? toke;

  Doctor(
      {this.id,
      this.name,
      required this.password,
      required this.email,
      this.toke});

  factory Doctor.fromJson(Map<String, dynamic> json) => _$DoctorFromJson(json);
  Map<String, dynamic> toJson() => _$DoctorToJson(this);
}
*/