check-env-file:
	@bash -c " \
		if [ ! -f .env ]; then \
			cp .env.example.docker .env; \
		fi; \
	"

base: check-env-file

# Tasks

# Build docker containers. Pass --no-cache to force re-downloading of images.
# See build --help for additional info
frontend-storybook-build: base
	docker-compose -f docker-compose.frontend.yml -f docker-compose.storybook.yml build $(ARGS)

# Start docker containers.
# See up --help for additional info
frontend-storybook-start: base
	docker-compose -f docker-compose.frontend.yml -f docker-compose.storybook.yml up $(ARGS)

# Stop docker containers.
frontend-storybook-stop: base
	docker-compose -f docker-compose.frontend.yml -f docker-compose.storybook.yml stop

# Opens a shell in the running storybook container. Useful for installing packages.
frontend-storybook-bash: base
	docker-compose -f docker-compose.frontend.yml -f docker-compose.storybook.yml exec devabler-storybook bash

# Build docker containers. Pass --no-cache to force re-downloading of images.
# See build --help for additional info
frontend-build: base
	docker-compose -f docker-compose.frontend.yml build $(ARGS)

# Start docker containers.
# See up --help for additional info
frontend-start: base
	docker-compose -f docker-compose.frontend.yml up $(ARGS)

# Stop docker containers.
frontend-stop: base
	docker-compose -f docker-compose.frontend.yml stop

# Opens a shell in the running frontend container. Useful for installing packages.
frontend-bash: base
	docker-compose -f docker-compose.frontend.yml exec devabler-frontend bash

# Build docker containers. Pass --no-cache to force re-downloading of images.
# See build --help for additional info
storybook-build: base
	docker-compose -f docker-compose.storybook.yml build $(ARGS)

# Start docker containers.
# See up --help for additional info
storybook-start: base
	docker-compose -f docker-compose.storybook.yml up $(ARGS)

# Stop docker containers.
storybook-stop: base
	docker-compose -f docker-compose.storybook.yml stop

# Opens a shell in the running storybook container. Useful for installing packages.
storybook-bash: base
	docker-compose -f docker-compose.storybook.yml exec devabler-storybook bash

help:
	@echo  ''
	@echo  ' Targets:'
	@echo  ''
	@echo  '  frontend-storybook-build     		- Build docker containers. Pass --no-cache to force re-downloading of images.'
	@echo  '  frontend-storybook-start    		- Start docker containers.'
	@echo  '  frontend-storybook-stop     		- Stop docker containers.'
	@echo  '  frontend-storybook-bash             - Opens a shell in the running frontend container. Useful for installing packages.'
	@echo  '  frontend-build     		- Build docker containers. Pass --no-cache to force re-downloading of images.'
	@echo  '  frontend-start    		- Start docker containers.'
	@echo  '  frontend-stop     		- Stop docker containers.'
	@echo  '  frontend-bash             - Opens a shell in the running frontend container. Useful for installing packages.'
	@echo  '  storybook-build     		- Build docker containers. Pass --no-cache to force re-downloading of images.'
	@echo  '  storybook-start    		- Start docker containers.'
	@echo  '  storybook-stop     		- Stop docker containers.'
	@echo  '  storybook-bash             - Opens a shell in the running frontend container. Useful for installing packages.'
