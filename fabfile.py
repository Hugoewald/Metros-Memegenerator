from fabric.api import env, task, cd, sudo

env.user = 'datadesk'
env.hosts = ("himmel.latimes.com",)
env.project_dir = '/apps/meme/'
env.app_user = 'datadesk'

@task
def pull():
    """
    Pulls the latest code using Git
    """
    with cd(env.project_dir):
        sudo("git pull origin master", user=env.app_user)


@task
def restartapache():
    """
    Restarts apache on both app servers.
    """
    sudo("/etc/init.d/apache2 reload", pty=True)


@task
def deploy():
    pull()
    restartapache()
