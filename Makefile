.PHONY: build serve

build:
	bundle exec middleman build

serve:
	bundle exec middleman -p 4567
