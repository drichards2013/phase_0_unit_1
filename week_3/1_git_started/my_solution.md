## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  



#### add
<!-- Your defnition here -->
- Is used to "propose" changes to the repository. It tells Git to begin tracking a file or set of files. I like to think of it as waking Git up. 
#### branch
<!-- Your defnition here -->
 - This command allows us to list, create, or delete branches. 

#### checkout
<!-- Your defnition here -->
- Gets rid of all the changes made to a file since the last commit. WHen a branch name follows "git checkout", it switches to that branch.

#### clone
<!-- Your defnition here -->

#### commit
<!-- Your defnition here -->
- Committing is basically saving the changes we added with "git add". When we commit, we must also pass in a commit message. It helps if the message describes what change we are committing.

#### fetch
<!-- Your defnition here -->
- Git fetch is is used to bring your local copy up-to-date with the remote repository to which it corresponds.

#### log
<!-- Your defnition here -->
- This command is very appropriately named. It returns a list of all the changes we have committed.

#### merge
<!-- Your defnition here -->
- Typing ``` git merge clean_up ``` from your current branch merges clean_up into it.

#### pull
<!-- Your defnition here -->
- Is used to grab the most recent copy of a particular branch.

#### push
<!-- Your defnition here -->
- Push is used when we want to post our changes to GitHub. With push, we can specify both a remote and local branch.

#### reset
<!-- Your defnition here -->
- Un-adds uncommitted changes.

#### rm
<!-- Your defnition here -->
- Stages the removal of files from tracking. It's very important to note that it **stages** the removal of files. Therefore **commit must be run after**.
#### status
- This command is used to see how the repository has changed since the last commit.


## Release 4: Git Workflow

- Push files to a remote repository
``` git push <remote name> <branch name> ```
- Fetch changes
``` git fetch ```
- Commit locally
``` git commit - 'commit message' ```

## Release 5: Reflection