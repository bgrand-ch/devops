FROM php:apache

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV APACHE_DOCUMENT_ROOT=/var/www/app/public

# Install required libraries
RUN apt update
RUN apt install -y libzip-dev

# Install required PHP extensions
RUN docker-php-ext-install zip pdo_mysql

# Enable Apache modules required for Laravel
RUN a2enmod rewrite

# Copy local files
COPY . /var/www/app
WORKDIR /var/www/app

# Update default Apache site configuration
COPY apache.conf /etc/apache2/sites-available/000-default.conf
RUN rm apache.conf

# Install dependencies for production
COPY --from=composer /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev

# Set permissions for Laravel
RUN chown -R www-data:www-data storage bootstrap/cache

EXPOSE 80
EXPOSE 443

CMD ["apache2-foreground"]
