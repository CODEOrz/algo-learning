 dynamic a;
 Object b;

 main() {
     a = "234";
     b = "2345";
     printLengths();
 }   

 printLengths() {
     // no warning
     print(a.length);
     // warning:
     // The getter 'length' is not defined for the class 'Object'
     print(b.length);
 }
