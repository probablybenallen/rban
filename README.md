# RTMP BAD AUTH NGINX - RBAN

Simple to set up authenication designed for the NGINX RTMP module to stop anyone else on your network being able to publish to your endpoint

## WARNING:

This is NOT a perfect solution and is not a replacement for good security practises and common sense. It's designed for school/university environments with sufficiant protection as to be a step forward from no authentication and nothing more; not to provide proper defense on the internet. RTMP is an insecure protocol so credentials can more than likely be found if an attacker knows how to use wireshark. Again, this is to stop students from being able to publish to campus streams without likely getting caught by other IT security measures, it will likely not stop a bad actor on a network you don't have control over.

## SETUP:

### Nginx

add the line

```
on_publish http://localhost:[PORT]/;
```

To your rtmp application config in your nginx.conf file, default port is 8086

### RBAN

#### pm2

Reccommended use is daemoised using pm2

```
cd [RBAN install folder]
pm2 start index.js [-- -p PORT]
```

#### Screen

Really not ideal, but if need be run

```
screen
npm install
npm start [-- -p PORT]
```

#### Socker

Coming soon...maybe...?
