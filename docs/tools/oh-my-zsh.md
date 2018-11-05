## Oh My Zsh
Oh My Zsh is a delightful, open source, community-driven framework for managing your Zsh configuration.

It comes bundled with a ton of helpful functions, helpers, plugins, themes, and a few things that make you shout.

## Install oh-my-zsh

**Via curl**

```js
    $ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

or **Via wget**

```js
    $ sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

## Theme 2 — Installing powerline Oh My ZSH theme

### 1. Install Powerline fonts

```shell
    $ git clone https://github.com/powerline/fonts.git
    $ cd fonts
    $ ./install.sh
```

### 2. Change the Theme to “agnoster”

```shell
    $ open ~/.zshrc
    Set ZSH_THEME="powerline" and save the file
```

### 3. Quit ITerm2 and reopen it.

### 4. Set Powerline font
Open ITerm2 and go to: _Preferences > Profiles > Text > Change Font_ and set it to something that has “for Powerline”.

## Install Plugins

### Plugin 1 — Add Syntax Highlighting Plugin
The Syntax Highlighting plugin adds beautiful colors to the commands you are typing as shown below.

```shell
    git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
```

Clone the zsh-syntax-highlighting plugin’s repo and copy it to the __“Oh My ZSH”__ plugins directory

Next ativate the plugin in **~/.zshrc** by adding `zsh-syntax-highlighting` to the Plugins section as shown below.

### Plugin 2 — Add ZSH-AutoSuggestion Plugin
This plugin auto suggests any of the previous commands. Pretty handy!
To select the completion, **simply press → key**

```shell
    git clone https://github.com/zsh-users/zsh-autosuggestions
```

Clone the zsh-autosuggestions plugin’s repo and copy it to the __“Oh My ZSH”__ plugins directory,

Next activate the plugin in **~/.zshrc** by adding `zsh-autosuggestions` to the Plugins section as shown below.

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

```
