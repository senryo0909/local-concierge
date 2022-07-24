FROM nginx:1.21

# wont use defalt setting due to reverse proxy which i use
RUN rm /etc/nginx/conf.d/default.conf

# using own reverse proxy setting file
COPY nginx/conf/default.conf /etc/nginx/conf.d