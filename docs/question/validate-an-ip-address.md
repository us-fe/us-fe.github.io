---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# validate an IP address

IPv4
----

An [IPv4 Address](https://en.wikipedia.org/wiki/IP_address#IPv4_addresses) is represented in dot-decimal notation, consisting of 4 numbers( called 'octet'), each ranging from 0 to 255, like `1.22.33.255`. It has 32 bit, so there are maximum 2^32 = 4,294,967,296 IPv4 addresses.

`Leading zeroes` are not allowed in IPv4, like `01.01.01.01` is invalid.

IPv6
----

An [IPv6 Address](https://en.wikipedia.org/wiki/IPv6_address) have 128 bits (which is a lot), separated by 8 groups (called 'hexadectet', or 'hextet', not fixed yet). Each group has 16 bits, so could be represented by a **hexadecimal string at 4 digits**, such as `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.

Notice that `leading zeroes` are allowed in IPv6.

There are other valid format of IPv6 addresses, like [Zero compression](https://tools.ietf.org/html/rfc5952#section-2.2), but it is beyond the scope here, you can ignore them.

Task
----

You are given some random string, please write a function if it is valid IPv4 or IPv6 address.

**Follow-up**

Can you solve it with regular expressions ?


[Source From](https://bigfrontend.dev/problem/validate-an-ip-address)

  