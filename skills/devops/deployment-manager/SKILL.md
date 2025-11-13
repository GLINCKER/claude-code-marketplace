---
name: deployment-manager
description: Automated deployment orchestration with rollback, blue-green, and canary deployment strategies
allowed-tools: ["Read", "Write", "Bash", "Grep", "Glob"]
version: 1.0.0
author: GLINCKER Team
license: Apache-2.0
keywords: [deployment, automation, rollback, blue-green, canary, orchestration]
---

# Deployment Manager

Advanced deployment orchestration agent for automated, safe, and reliable application deployments. Supports multiple deployment strategies, automatic rollback, and production-ready workflows.

## Agent Expertise

- Zero-downtime deployments
- Blue-green deployment strategy
- Canary releases with progressive rollout
- Automated rollback on failure
- Multi-environment deployment (dev, staging, prod)
- Database migration coordination
- Health checks and validation
- Deployment pipeline orchestration

## Key Capabilities

1. **Deployment Strategies**: Blue-green, canary, rolling updates, recreate
2. **Automated Rollback**: Automatic rollback on health check failures
3. **Database Migrations**: Safe schema changes with rollback support
4. **Health Monitoring**: Pre and post-deployment validation
5. **Traffic Management**: Progressive traffic shifting for canary deployments
6. **Multi-Cloud Support**: AWS, GCP, Azure, and on-premise

## Workflow

When activated, this agent will:

1. Analyze application architecture and deployment requirements
2. Select appropriate deployment strategy
3. Run pre-deployment health checks
4. Execute deployment with safety measures
5. Monitor application health during rollout
6. Automatically rollback if issues detected
7. Notify stakeholders of deployment status

## Quick Commands

```bash
# Deploy to production
"Deploy the application to production using blue-green strategy"

# Canary release
"Deploy new version to 10% of users, then gradually increase"

# Deploy with migration
"Deploy application and run database migrations safely"

# Rollback
"Rollback the last production deployment"

# Setup deployment pipeline
"Create automated deployment pipeline for this application"

# Multi-environment deploy
"Deploy to staging, wait for approval, then deploy to production"
```

## Deployment Strategies

### Blue-Green Deployment

**Zero-downtime deployment**:
1. Deploy new version (Green) alongside current (Blue)
2. Run health checks on Green environment
3. Switch traffic from Blue to Green
4. Keep Blue as instant rollback option

**Best for**: Production deployments requiring zero downtime

### Canary Deployment

**Progressive rollout**:
1. Deploy to small subset of users (5-10%)
2. Monitor metrics and errors
3. Gradually increase traffic (25% → 50% → 100%)
4. Rollback if error rate increases

**Best for**: High-risk changes, new features, performance optimizations

### Rolling Update

**Gradual instance replacement**:
1. Update instances one at a time
2. Wait for health check before next instance
3. Maintain minimum available capacity
4. Automatic rollback if health checks fail

**Best for**: Kubernetes deployments, containerized applications

### Recreate

**Simple stop-and-start**:
1. Stop current version
2. Deploy new version
3. Start new version

**Best for**: Development environments, non-critical applications

## Features

### Automated Health Checks

**Pre-deployment validation**:
- Check dependencies (database, external services)
- Verify resource availability (CPU, memory, disk)
- Validate configuration

**Post-deployment validation**:
- Application startup success
- API endpoint responsiveness
- Error rate monitoring
- Performance metrics comparison

### Database Migration Management

**Safe schema changes**:
```bash
# Coordinated migration with deployment
1. Run backward-compatible migrations
2. Deploy new application code
3. Run cleanup migrations
4. Automatic rollback if any step fails
```

**Migration strategies**:
- Expand-contract pattern
- Feature flags for breaking changes
- Data backfill coordination
- Zero-downtime migrations

### Automatic Rollback

**Triggers for automatic rollback**:
- Health check failures (3+ consecutive)
- Error rate spike (> 5% increase)
- Response time degradation (> 50% slower)
- Custom metric thresholds

**Rollback process**:
1. Detect failure condition
2. Stop new deployment
3. Redirect traffic to previous version
4. Notify team with failure details
5. Preserve logs for investigation

### Traffic Management

**Progressive traffic shifting**:
```yaml
# Canary deployment schedule
- 10% for 10 minutes
- 25% for 10 minutes
- 50% for 15 minutes
- 100% if all metrics healthy
```

**Load balancing integration**:
- AWS ALB weighted targets
- Nginx traffic splitting
- Istio traffic management
- HAProxy backend weighting

## Platform Support

### Cloud Platforms
- **AWS**: ECS, EKS, Elastic Beanstalk, Lambda
- **Google Cloud**: GKE, Cloud Run, App Engine
- **Azure**: AKS, App Service, Container Instances
- **DigitalOcean**: App Platform, Kubernetes

### Container Orchestration
- **Kubernetes**: Deployments, StatefulSets, DaemonSets
- **Docker Swarm**: Service updates, rolling updates
- **Nomad**: Job deployments, canary releases

### CI/CD Integration
- **GitHub Actions**: Deployment workflows
- **GitLab CI/CD**: Deploy jobs with environments
- **Jenkins**: Deployment pipelines
- **CircleCI**: Deployment orchestration
- **ArgoCD**: GitOps deployments

## Best Practices

1. **Always Test First**: Deploy to staging before production
2. **Use Feature Flags**: Decouple deployment from release
3. **Monitor Actively**: Watch metrics during deployment
4. **Keep Rollback Ready**: Maintain quick rollback capability
5. **Automate Everything**: Reduce human error with automation
6. **Communicate Status**: Keep stakeholders informed
7. **Document Runbooks**: Prepare for common issues
8. **Practice Deployments**: Regular deployment drills

## Example Workflows

### Production Deployment with Approval

```yaml
workflow:
  - stage: deploy-staging
    environment: staging
    on_success: request-approval

  - stage: await-approval
    approvers: [tech-lead, product-owner]
    timeout: 24h

  - stage: deploy-production
    environment: production
    strategy: blue-green
    health_checks:
      - endpoint: /health
      - error_rate: < 1%
      - response_time: < 500ms
    auto_rollback: true
```

### Canary Release

```yaml
deployment:
  strategy: canary
  stages:
    - traffic: 10%
      duration: 10m
      success_criteria:
        error_rate: < 2%
        p95_latency: < 1000ms

    - traffic: 50%
      duration: 15m
      success_criteria:
        error_rate: < 1%
        p95_latency: < 800ms

    - traffic: 100%
      success_criteria:
        error_rate: < 0.5%
        p95_latency: < 500ms

  rollback:
    automatic: true
    on_failure: true
```

### Database Migration with Deployment

```yaml
pipeline:
  - step: backup-database
    required: true

  - step: run-migrations
    backward_compatible: true

  - step: deploy-application
    strategy: rolling-update
    health_check: /health

  - step: cleanup-migrations
    on_success: true

  rollback_plan:
    - revert-deployment
    - rollback-migrations
    - restore-backup (if needed)
```

## Monitoring & Observability

**Metrics to monitor**:
- Response time (p50, p95, p99)
- Error rate (4xx, 5xx)
- Request throughput
- CPU and memory usage
- Database connection pool
- External service latency

**Alerting integration**:
- PagerDuty for critical failures
- Slack for deployment notifications
- Email for approval workflows
- Webhooks for custom integrations

## Common Use Cases

### Zero-Downtime Production Deploy
"Deploy the new version to production with zero downtime using blue-green strategy"

### Gradual Feature Rollout
"Deploy the new feature to 10% of users and gradually increase if metrics look good"

### Emergency Rollback
"Rollback the production deployment that went out 30 minutes ago"

### Multi-Region Deployment
"Deploy to us-east-1, validate, then roll out to all other regions"

### Deployment with Database Changes
"Deploy the application with database schema changes using expand-contract pattern"

## Safety Features

- **Dry-run mode**: Preview changes without applying
- **Deployment locks**: Prevent concurrent deployments
- **Approval workflows**: Require manual approval for production
- **Rate limiting**: Prevent deployment storms
- **Circuit breakers**: Stop deployment if too many failures
- **Audit logging**: Track all deployment activities

## Author

**GLINCKER Team**
