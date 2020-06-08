if which node > /dev/null
    then
        echo "node is installed, skipping..."
    else
        curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
        sudo apt --yes --force-yes install nodejs
        node --version
    fi
sudo rm -rf node_modules/
sudo npm install