## Oh My Zsh
Oh My Zsh is a delightful, open source, community-driven framework for managing your Zsh configuration. It comes bundled with a ton of helpful functions, helpers, plugins, themes, and a few things that make you shout...

## Install oh-my-zsh

**Via curl**

```js
    $ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

or **Via wget**

```js
    $ sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

## My Configuration Files

```shell
    # If you come from bash you might have to change your $PATH.
    # export PATH=$HOME/bin:/usr/local/bin:$PATH

    # Path to your oh-my-zsh installation.
    export ZSH="/Users/mauroreisvieira/.oh-my-zsh"

    # Set name of the theme to load. Optionally, if you set this to "random"
    # it'll load a random theme each time that oh-my-zsh is loaded.
    # See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
    ZSH_THEME="powerline"


    # Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
    # Example format: plugins=(rails git textmate ruby lighthouse)
    # Add wisely, as too many plugins slow down shell startup.

    plugins=(
        osx
        git
        npm
        yarn
        nvm
        zsh-syntax-highlighting
        zsh-autosuggestions
    )

    source $ZSH/oh-my-zsh.sh

    # ssh
    # export SSH_KEY_PATH="~/.ssh/rsa_id"

    # Example aliases
    # alias zshconfig="mate ~/.zshrc"
    # alias ohmyzsh="mate ~/.oh-my-zsh"

    #------------------------------------------////
    # Aliases:
    #------------------------------------------////
    # Useful aliases (building on the color enablers)
    alias ll='ls -l'
    alias la='ls -Al'

    # Shortcuts
    alias home='cd ~/'
    alias docs='cd ~/Documents'
    alias downloads='cd ~/Downloads'
    alias ux-team='cd Documents/Namecheap/UX-Team'
    alias dev='npm run dev'
    alias lint:js='npm run lint:js'
    alias lint:ts='npm run lint:ts'
    alias lint:css='npm run lint:css'
    alias lint:css='npm run lint:css'
    alias test:unit='npm run test:unit'

```
