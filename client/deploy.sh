echo "Switching to branch prod"
git checkout prod

echo "Building app..."
npm run build-prod

echo "Deploying files to server"
scp -r build/* rodion@45.141.78.192:/var/www/45.141.78.192/

echo "Done"