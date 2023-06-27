FROM nginx:latest
RUN apt-get update && apt-get install -y supervisor

COPY dist /usr/share/nginx/html
COPY dist/chatgpt-web-linux /backend
COPY docker/supervisor/chat-gpt.conf /etc/supervisor/conf.d/
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
CMD ["/usr/bin/supervisord"]