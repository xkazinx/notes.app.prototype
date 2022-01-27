# Productivity App
Thank you for helping us help you help us all

# Setup
-   Install WSL Ubuntu to run these commands
-   `sudo apt-get update`
-   `sudo apt install software-properties-common`
-   `sudo add-apt-repository ppa:ondrej/php`
	- PHP is needed to install COMPOSER but can be removed after
-   `sudo apt-get update`
-   `sudo apt install php7.4`
-   `php -v`
	- To ensure that it's installed properly
-   `sudo apt-get install -y php7.4-cli php7.4-json php7.4-common php7.4-mysql php7.4-zip php7.4-gd php7.4-mbstring php7.4-curl php7.4-xml php7.4-bcmath`
-   Install Composer:
	- `php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"`
	- `php composer-setup.php`
-   Clone this repository
-   You can access the repo folder through `mnt` in WSL to access Windows data from WSL
-   `composer update`
-   `composer install`
   -   if `chmod(): Operation not permitted` is thrown, run with sudo `sudo php artisan package:discover --ansi`
-   At this point you should have PHP in SAIL and you can remove PHP: `sudo apt remove php`*
- `cd` into project's folder
-   `sail composer update`
-   `sail composer install`
-   `cp .env.example .env`
	- Edit settings in `.env` file, if needed
-   `sail php artisan key:generate`
-   `Edit .env file`
-   `sail php artisan migrate`
-   `sail php artisan db:seed`
-   `./vendor/bin/sail up`
-   `./vendor/bin/sail npm install`
-   `./vendor/bin/sail npm run watch`
	- Optionally, you can make an `alias` to only type `sail` instead of `./vendor/bin/sail` by running `nano ~/.bashrc` and adding this line: `alias sail='/vendor/bin/sail'`
	- You an also make an alias for the project folder to not have to `cd` into it everytime
	- In Visual Studio Code, you can Press F1: `Remote WSL` to open a Visual Studio instance with access to the `WSL` console
		- You need to download `WSL` extension for this
  