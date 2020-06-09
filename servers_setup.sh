#!/bin/bash
# Applcation Servers (node js)
if which node > /dev/null
    then
        echo "node is installed, skipping..."
    else
        curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
        sudo apt --yes --force-yes install nodejs
        node --version
    fi
sudo npm install

node server1.js
node server2.js

# MySQL Server
sudo apt-get update
sudo apt-get --yes --force-yes install mysql-server
sudo ufw enable
sudo ufw allow mysql
sudo systemctl start mysql
sudo systemctl enable mysql
if [ 'sudo sed -i "s/.*bind-address.*/bind-address = 127.0.0.1/" /etc/mysql/my.cnf' ]; then

    echo "Updated mysql bind address in /etc/mysql/my.cnf to 127.0.0.1 to allow external connections."

    sudo /etc/init.d/mysql stop
    sudo /etc/init.d/mysql start

fi

sudo apt-get install nginx
sudo yum install epel-release
sudo yum update
sudo yum install nginx
cd /etc/nginx/
sudo ln -s /etc/nginx/sites-available/vhost /etc/nginx/sites-enabled/vhost
sudo systemctl restart nginx
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --reload
sudo nano /etc/nginx/conf.d/load-balancer.conf