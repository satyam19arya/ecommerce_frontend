<img width="960" alt="image" src="https://github.com/satyam19arya/ecommerce_frontend/assets/77580311/dca21beb-bbd8-4b8f-b2b9-fa9c1aa26f2d">

### To deploy in production
EC2 instance USER-DATA script
```
#!/bin/bash
sudo apt update -y
sudo apt install apache2 -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs -y
sudo apt update -y
sudo npm install -g corepack -y
corepack enable
corepack prepare yarn@stable --activate --yes
sudo yarn global add pm2
```

SSH into your instance and run the following commands
```
git clone https://github.com/satyam19arya/ecommerce_frontend.git
cd ecommerce_frontend
npm i
npm run build
sudo cp -r build/* /var/www/html
```

Note:
- Add env variables
- Update BrowserRouter to HashRouter in index.js file

Launch Template User-Data script
```
#!/bin/bash
sudo apt update -y
sleep 90
sudo systemctl start apache2.service
```
