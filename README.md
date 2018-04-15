# Puppet Compliance OpenAPI Specification
[![Build Status](https://travis-ci.org/dylanratcliffe/compliance_api_spec.svg?branch=master)](https://travis-ci.org/dylanratcliffe/compliance_api_spec)

## Links

- Documentation(ReDoc): https://dylanratcliffe.github.io/compliance_api_spec/
- SwaggerUI: https://dylanratcliffe.github.io/compliance_api_spec/swagger-ui/
- Look full spec:
    + JSON https://dylanratcliffe.github.io/compliance_api_spec/swagger.json
    + YAML https://dylanratcliffe.github.io/compliance_api_spec/swagger.yaml
- Preview spec version for branch `[branch]`: https://dylanratcliffe.github.io/compliance_api_spec/preview/[branch]

## Working on specification

### Install

```
docker pull swaggerapi/swagger-editor
```

### Usage

  1. Run `docker run -d -p 5000:8080 swaggerapi/swagger-editor`
  1. Open http://localhost:5000
  1. Note that your changes will not be saved, you will need to copy-paste them locally to save
  2. Once you finish with the changes you can run tests using: `npm test`
  2. Share you changes with the rest of the world by pushing to GitHub :smile:
