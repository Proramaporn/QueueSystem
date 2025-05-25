.PHONY: run-backend run-frontend build-frontend run-all

run-backend:
	cd backend && go run main.go

run-frontend:
	cd frontend && npm start

build-frontend:
	cd frontend && npm run build

run-all:
	@echo "⚠️  You need to run backend and frontend in separate terminals."
	@echo "👉 Run: make run-backend"
	@echo "👉 And in another terminal: make run-frontend"