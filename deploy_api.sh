echo "Switching to branch prod"
git checkout prod

echo "Deploying files to server"
scp -r api/* rodion@45.141.78.192:/var/www/45.141.78.192/api

echo "Done"