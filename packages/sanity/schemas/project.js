export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      title: 'Cover',
      description: 'Cover image of the project',
      name: 'cover',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Icon',
      description: 'Icon image of the project',
      name: 'icon',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Name',
      description: 'Name of the project',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Links',
      description: 'Links of the project',
      name: 'links',
      type: 'object',
      validation: (Rule) =>
        Rule.custom((fields) => {
          if (!fields) return 'You must insert at least one project link';
          return true;
        }),
      fields: [
        {
          title: 'Website',
          description: 'Website of the project',
          name: 'website',
          type: 'url',
        },
        {
          title: 'Twitter',
          description: 'Twitter profile of the project',
          name: 'twitter',
          type: 'url',
        },
        {
          title: 'Discord',
          description: 'Discord server of the project',
          name: 'discord',
          type: 'url',
        },
        {
          title: 'Instagram',
          description: 'Instagram profile of the project',
          name: 'instagram',
          type: 'url',
        },
        {
          title: 'OpenSea',
          description: 'OpenSea profile of the project',
          name: 'opensea',
          type: 'url',
        },
        {
          title: 'Etherscan',
          description: 'Smart contract of the project',
          name: 'etherscan',
          type: 'url',
        },
      ],
    },
    {
      title: 'Minted',
      description: 'Project has been already minted or not',
      name: 'minted',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Displayed',
      description: 'Project is shown or not',
      name: 'displayed',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Mint',
      description: 'Mint details of the project',
      name: 'mint',
      type: 'object',
      fields: [
        {
          title: 'Private',
          description: 'Private mint details of the project',
          name: 'private',
          type: 'object',
          fields: [
            {
              title: 'Start',
              description: 'Private mint start date',
              name: 'start',
              type: 'datetime',
            },
            {
              title: 'End',
              description: 'Private mint end date',
              name: 'end',
              type: 'datetime',
            },
          ],
        },
        {
          title: 'Public',
          description: 'Public mint details of the project',
          name: 'public',
          type: 'object',
          fields: [
            {
              title: 'Start',
              description: 'Public mint start date',
              name: 'start',
              type: 'datetime',
            },
          ],
        },
      ],
    },
  ],
};
