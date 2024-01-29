## **Contributions**

Toute contribution est la bienvenue. Veuillez lire les informations ci-après avant de proposer votre aide.

### **Erreurs rencontrées**

Si vous rencontrez une erreur quelconque sur le site, merci d'en faire part dans la catégorie "issues" de ce dépôt ou de nous [contacter](https://gitlab.emse.fr/arem/site-web/-/tree/main#support). Il peut s'agir d'une faute de français, de l'oubli d'un mot, d'une date incorrecte, d'une traduction erronée ou absente, d'un shortcode qui ne fonctionne pas comme il devrait, etc.

### **Suggestions**

Les suggestions relatives au contenu et à l'organisation de ce site sont les bienvenues. Merci de les faire remonter dans la catégorie "issues" de ce dépôt, avec le tag "suggestions".

### **Écriture d'articles**

Il est important de maintenir ce site à jour en postant des articles régulièrement, en gardant deux choses à l'esprit :
* trop d'articles peuvent perdre les lecteurs. Ce site est une vitrine, pas un fourre-tout,
* mieux vaut pas d'article qu'un article qui dessert le site. L'orthographe et la mise en page ne sont pas à négliger. Les articles doivent être relativement clairs et concis. Une unité au sein des pages doit être maintenue.

N'hésitez pas à nous [contacter](https://gitlab.emse.fr/arem/site-web/-/tree/main#support) avant d'écrire un article pour de plus amples informations.

* **Conventions**

    Les conventions sont essentielles afin de conserver une compatibilité avec les prochaines versions d'Hugo et afin de garder des standards de lisibilité et d'organisation vitaux au maintien du site.

    * Les images doivent être en format webp. Elles doivent être rangées dans le dossier image, selon la même arborescence que l'article dans lequel elles sont utilisées.
    * Tous les dossiers et fichiers doivent avoir un nom utilisant des lettres minuscules, des nombres ou des _("underscore") seulement. (Les dossiers des auteurs sont une exception à cette règle pour le moment pour des raisons techniques.)
    * Tous les dossiers et fichiers doivent avoir un nom français.
    * Les articles doivent être sobres, sans fautes de langue. Un article mal écrit dessert le site.
    * Les recommandations du langage Markdown doivent être respectées. Elles sont disponibles sur le [site officiel](https://www.markdownguide.org/).
    * Les tabulations se font par 4 espaces, et pas une réelle tabulation.

* **Front matter**

    Chaque article doit débuter avec un "front matter" (un en-tête spécifique à Hugo.) Celui-ci contient des informations sur l'article, certaines obligatoires et d'autres optionnelles. Voici ci-dessous un exemple de front matter :

        title = "Titre exemple du front matter"
        date = "2054-06-25"
        authors = ["Éléa Robert", "Titouan Real]
        toc = true
        featured = true
        cover_url = "/images/evenements/iter_robots/couverture.webp"

    * **Variables (éventuellement) obligatoires**

        "title" doit être présent et contenir le titre. Le titre doit être simple, explicite et respecter une certaine unité avec les autres articles. Exemple pour la CDR : "Coupe de France de Robotique 2021", ou "Coupe de France de Robotique 2022". Ne pas écrire "coupe de robotique 2022" ou "cdr 2022".

        "date" doit être présent si l'article relate un évènement et contenir la date de l'évènement au format *année*-*mois*-*jour*. Si l'évènement dure plusieurs jours, "date" contient la date du début de l'évènement et "dateend" la date de fin de l'évènement.

        "authors" doit être présent et contenir les noms des auteurs de cet article, au format ["Prénom1 Nom1", "Prénom2 Nom2", ...]. Les majuscules et accents aux prénoms et noms sont essentiels pour que le nom des auteurs en bas de page soient un lien vers leur page individuelle.

        "translators" doit être présent si la page est traduite depuis une autre langue, et contenir les noms des traducteurs de cet article, au format ["Prénom1 Nom1", "Prénom2 Nom2", ...]. Les majuscules et accents aux prénoms et noms sont essentiels pour que le nom des traducteurs en bas de page soient un lien vers leur page individuelle.

        "description" doit être présent et contenir une brève description de l'article.

    * **Variables optionnelles (mais non négligeables)**

        "featured" peut être mis à true pour que l'article apparaisse sur le slider de la page d'accueil. Il doit être suivi de la variable "cover_url", qui est le chemin vers l'image affichée sur le slider pour cet article.

        "featured_weight" permet de donner un poids à un article featured pour décider de l'ordre d'affichage des articles sur la page d'accueil. La page d'accueil affiche tous les articles "featured" dans l'ordre croissant de leur valeur "featured_weight". Les articles "featured" sans cette valeur sont mis après les articles avec une telle valeur choisie, dans un ordre choisie par hugo.

        "toc", qui signifie Table Of Content ou sommaire, peut être mis à true si on veut que le sommaire de la page apparaisse automatique sur la page. Il est créé par Hugo grâce aux titres ##, ### etc de l'article.

* **Shortcodes**

    Plusieurs shortcodes sont disponibles pour vous aider à écrire un article.
    Certains sont proposés par Hugo et sont décrits [ici](https://gohugo.io/content-management/shortcodes/). Il est conseillé autant que possible d'utiliser ceux créés seulement pour ce site ; ils sont présentés ci-dessous.

    *Image au centre :*

        {{<image_center source="/images/..." width="..%" title="..." alt="...">}}

    *Image à gauche :*\

        {{<image_left source="/images/..." width="..%" title="..." alt="...">}}

    *Image à droite :*\

        {{<image_right source="/images/..." width="..%" title="..." alt="...">}}

    *Deux images côte à côte :*\
    (Les images ont automatiquement la même largeur et sont espacées de 5%.)

        {{<two_images source_left="/images/..." title_left="..." alt_left="..." source_right="/images/..." title_right="..." alt_right="...">}}

    *Trois images côte à côte :*\
    (Les images ont automatiquement la même largeur et sont espacées de 5%.)

        {{<three_images source_left="/images/..." title_left="..." alt_left="..." source_center="/images/..." title_center="..." alt_center="..." source_right="/images/..." title_right="..." alt_right="...">}}

### **Maintien du site**

* **Shortcodes**

    Les shortcodes doivent être créés dans le dossier layouts/shortcodes.
    Leur nom {{<nom>}} est le nom du fichier qui les contient. Ils contiennent du HTML qui peut invoquer un argument du shortcode en invoquant {{ .Get "nom_de_l_argument" }}.

### **Développement plus approfondi**

Ces fichiers modifient la mise en page générale du site. Toute modification est sujette à caution. Merci d'effectuer vos tests en local ou sur une branche alternative à la branche principale.

* **Page d'accueil**

    Le fichier qui gère la page d'accueil est /layouts/index.html.
    C'est un fichier HTML classique.

* **Mise en page générale**

    La mise en page est gérée par trois fichiers présents dans le dossier /layouts/_default.

    baseof.html est le schéma de base de toutes les pages.

    Les pages de type *list* incluent le fichier list.html en tant que "main" du baseof.

    Les pages de type *single* incluent le fichier single.html en tant que "main" du baseof.


* **Éléments particuliers de la mise en page**

    Chaque fichier de layout peut faire appel à un partial, présent dans /layouts/partials.
